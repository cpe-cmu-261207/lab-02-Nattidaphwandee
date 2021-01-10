
            function isNumber(n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            }

            function gen_table() {
                var total_subject = $('#total_subject').val();
                if (isNumber(total_subject)) {
                    if ($('.control-group').is('.error')) {
                        $('.control-group').removeClass('error');
                    }

                    $('#table_display').html("");
                    total_subject = parseInt(total_subject);
                    if (total_subject > 0) {
                        $('.table').show().animate({'opacity':'1'},800);
                    } else {
                        $('.table').hide().css({'opacity':'0'});
                    }
                    for (var i = 0; i < total_subject; i++) {
                        //str = "<tr><td>" + (i + 1) + "</td><td><input type='text' size=6 id='name_" + i + "'  class='content-box-program-inputbox'></td><td><input type='text' size=7 class='content-box-program-inputbox' id='credit_" + i + "'></td><td><input type='text' size=4 id='grade_" + i + "' class='content-box-program-inputbox'></td></tr>";
                        str = "<tr><td>" + (i + 1) + "</td><td><input type='text' size=10 id='name_" 
                            
                            + i + "'  class='content-box-program-inputbox'></td><td><input type='text' size=7 class='content-box-program-inputbox' id='credit_"
                            + i + "'></td><td><input type='text' size=4 id='grade_"
                            + i + "'  class='content-box-program-inputbox'></td><td><input type='text' size=7 id='Semester_"
                            + i + "' class='content-box-program-inputbox'></td></tr>";

                        $('#table_display').append(str);
                    }
                    $('#gen_submit').addClass("btn-danger").text("ตกลง");
                } else {
                    $('.control-group').addClass('error');
                    $('.table').hide().css({'opacity':'0'});
                }
            }

            function cal_grade() {
            	var grade = $("#grade").val();
                var total_subject = $('#total_subject').val();
                var all_weight = 0, got_weight = 0;
                if (isNumber(total_subject)) {
                    total_subject = parseInt(total_subject);
                    for (i = 0; i < total_subject; i++) {
                        var ec = $('#credit_' + i);
                        var es = $('#grade_' + i);
                        if (!isNumber(ec.val())) {
                            alert("ป้อนข้อมูลหน่วยกิตไม่ถูกต้อง");
                            ec.focus();
                            return;
                        } else {
                            if (parseFloat(ec.val()) <= 0.0) {
                                alert("ป้อนข้อมูลหน่วยกิตไม่ถูกต้อง");
                                ec.focus();
                                return;
                            }
                        }

                        if (!isNumber(es.val())) {
                            alert("ป้อนข้อมูลเกรดที่ได้ไม่ถูกต้อง");
                            es.focus();
                            return;
                        } else {
                            if (parseFloat(es.val()) <= 0.0 || parseFloat(es.val()) > 4.0) {
                                alert("ป้อนข้อมูลเกรดที่ได้ไม่ถูกต้อง");
                                es.focus();
                                return;
                            }
                        }

                        all_weight += parseFloat(ec.val());
                        got_weight += parseFloat(ec.val()) * parseFloat(es.val());
                    }
                    var calculated = (got_weight / all_weight).toFixed(2);
                    $('#grade').text("เกรดที่ได้ " + calculated);
                    var grade = calculated;
                    $("#grade").val(grade);
                    
                    $('#all_weight').text("หน่วยกิต " + all_weight);
                    var all_weight = all_weight;
                    $("#all_weight").val(all_weight);
                }
            }

          




            $(function() {
                $('.table').hide().css({'opacity':'0'});

                $('.request').submit(function() {
                    gen_table();
                    return false;
                });

                
                $('.post').submit(function() {
                    gen_table();
                    return false;
                });

                $('#grade').click(function() {
                    cal_grade();
                    $(this).removeClass('btn-primary').addClass('btn-success');
                });
                
             
            });
function printpage()
  {
  window.print()
  }


