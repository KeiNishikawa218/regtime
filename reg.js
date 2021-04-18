javascript: (function () { 
    document.getElementsByName("recording_type_code_1")[0].options[1].selected = true;
    document.getElementById("recording_timestamp_time_1").value = "10:00";
    document.getElementById("recording_timestamp_time_1").focus();
    document.getElementById("recording_timestamp_time_1").blur();
    document.getElementsByName("recording_type_code_2")[0].options[3].selected=true;
    document.getElementById("recording_timestamp_time_2").value  = "12:00";
    document.getElementById("recording_timestamp_time_2").focus();
    document.getElementById("recording_timestamp_time_2").blur();
    document.getElementsByName("recording_type_code_3")[0].options[4].selected = true;
    document.getElementById("recording_timestamp_time_3").value  = "13:00";
    document.getElementById("recording_timestamp_time_3").focus();
    document.getElementById("recording_timestamp_time_3").blur();
    document.getElementsByName("recording_type_code_4")[0].options[2].selected = true;
    document.getElementById("recording_timestamp_time_4").value  = "19:00";
    document.getElementById("recording_timestamp_time_4").focus();
    document.getElementById("recording_timestamp_time_4").blur();
    document.getElementById("recording_timestamp_time_1").focus();
    onClickActionButton('action_01');
}
)();