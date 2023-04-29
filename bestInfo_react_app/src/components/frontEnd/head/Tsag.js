import React from "react";
import $ from "jquery";

const Tsag = () => {
    $(document).ready(function () {
        var monthNames = [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
        ];
  
        var dayNames = [
          "Ням",
          "Даваа",
          "Мягмар",
          "Лхагва",
          "Пүрэв",
          "Баасан",
          "Бямба",
        ];
  
        var newDate = new Date();
  
        newDate.setDate(newDate.getDate());
  
        $("#Date").html(
          newDate.getFullYear() +
            "/" +
            monthNames[newDate.getMonth()] +
            "/" +
            newDate.getDate() +
            ", " +
            dayNames[newDate.getDay()] +
            " гараг"
        );
  
        setInterval(function () {
          var seconds = new Date().getSeconds();
  
          $("#sec").html((seconds < 10 ? "0" : "") + seconds);
        }, 1000);
  
        setInterval(function () {
          var minutes = new Date().getMinutes();
  
          $("#min").html((minutes < 10 ? "0" : "") + minutes);
        }, 1000);
  
        setInterval(function () {
          var hours = new Date().getHours();
  
          var period = "am";
  
          if (hours >= 12) {
            hours = hours - 12;
  
            period = "pm";
          }
  
          $("#hours").html((hours < 10 ? "0" : "") + hours);
  
          $("#period").html(period);
        }, 1000);
      });
    return <div id="Date" className="todayDate"></div>;
}

export default Tsag;


