date = new Date(), months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], year = date.getFullYear(), colors = ["black","maroon","red","orange","yellow","silver","#afa","lime","#0c8","cyan","#0af"], textcolors = ["red","#f88","black","black","black","black","black","black","black","green","lime"], days = document.getElementById("days"), i = 0, description = [], n = -1, music = new Audio("Music.mp3");
month = months[date.getMonth()], today = date.getDate(), music.volume = 0.25;
document.getElementById("date").innerHTML = month + " " + today + ", " + year;
for (let w = 0; w < Math.ceil(data.length/7); w++) {
    week = days.insertRow();
    for (let d = 0; d < 7 && data[i]; d++) {
        day = week.insertCell();
        if (data[i][1] > -1) {
            n++;
            description.push("— " + months[data[i][0][1]-1] + " " + data[i][0][2] + ", " + data[i][0][0] + " • Rating: " + data[i][1] + "/10 • " + data[i][2] + " —\n\n" + data[i][3]);
            day.textContent = data[i][0][2];
            day.style.background = colors[data[i][1]];
            day.style.color = textcolors[data[i][1]];
            day.id = n;
            day.onclick = function() {document.getElementById("text").innerText = description[this.getAttribute("id")]};
            if (data[i][1] == 0 || data[i][1] == 9 || data[i][1] == 10) {
                day.style.border = "2px solid";
                day.style.boxShadow = "0 0 1rem";
                day.style.textShadow = "0 0 0.5rem";
            }
            if (data[i][1] == 1) {day.style.boxShadow = "0 0 1rem maroon";}
            if (data[i][0][0] == year && months[data[i][0][1]-1] == month && data[i][0][2] == today) {day.style.fontWeight = "800";}
        } else {
            day.style.border = 0;
            day.style.boxShadow = "none";
        }
        i++;
    }
}
setInterval(function(){if (music.paused) {music.play();}}, 50/3);
