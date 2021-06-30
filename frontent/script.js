let selectedDevice = {};
const server_ip = '192.168.0.107';
var r = document.querySelector(':root');
// Create a function for getting a variable value
const changeCSSVar = (name, value) => {
    var r = document.querySelector(':root');
    r.style.setProperty(name, value);
};
const options = {
    chart: {
        height: 250,
        type: "line",
        stacked: false,
        toolbar: {
            show: false
        }
    },
    colors: ["#FF1654"],
    series: [],
    noData: {
        text: 'Connecting to Server... Please Wait...'
    },
    stroke: {
        curve: 'smooth',
    },
    plotOptions: {
        bar: {
            columnWidth: "20%"
        }
    },
    yaxis: [
        {
            axisBorder: {
                show: true,
                color: "#FF1654"
            },
        }
    ],
    legend: {
        horizontalAlign: "left",
        offsetX: 40
    },
    tooltip: {
        enabled: false,
    },
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
const update = (init) => {
    const url = 'http://127.0.0.1:5500/dist/api/live_data.json';
    $.getJSON(url, (response) => {
        chart.updateSeries([{
                name: 'Power',
                data: response
            }]);
        let load_avg = 0, load_min = 0, load_max = 0;
        for (let i = 0; i < Object.values(response).length; i++) {
            const curr = Object.values(response)[i]['y'];
            load_avg = load_avg + curr;
            if (i === 0 && curr != 0)
                load_min = curr;
            if (curr != 0 && load_min > curr)
                load_min = curr;
            if (load_max < curr)
                load_max = curr;
        }
        if (init == true) {
            $(`#c_load, #min-peak, #avg-peak, #max-peak`).css({ 'transform': 'scale(.5)', 'transition': '.1s all ease-in', 'opacity': 0 });
            setTimeout(() => {
                $(`#c_load`).html(`<span class="txt">Active Load</span><span><span id="curr_load-total">${Object.values(response)[Object.values(response).length - 1]['y']}</span>&nbsp;W</span>`);
                $(`#min-peak, #low_pw_load`).html(`${load_min} W`);
                $(`#avg-peak, #avg_pw_load`).html(`${Math.round(load_avg / Object.values(response).length)} W`);
                $(`#max-peak, #peak_pw_load`).html(`${load_max} W`);
                setTimeout(() => {
                    $(`#c_load, #min-peak, #avg-peak, #max-peak`).css({ 'transform': 'scale(1)', 'transition': '.1s all ease-in', 'opacity': 1 });
                }, 100);
            }, 100);
        }
        else {
            $(`#c_load`).html(`<span class="txt">Active Load</span><span><span id="curr_load-total">${Object.values(response)[Object.values(response).length - 1]['y']}</span>&nbsp;W</span>`);
            $(`#min-peak, #low_pw_load`).html(`${load_min} W`);
            $(`#avg-peak, #avg_pw_load`).html(`${Math.round(load_avg / Object.values(response).length)} W`);
            $(`#max-peak, #peak_pw_load`).html(`${load_max} W`);
        }
    });
};
setTimeout(() => { update(true); }, 1000);
setInterval(() => { update(false); }, 2000);
const changeState = (e) => {
    if ($(e).hasClass("off")) {
        $.get(`http://${server_ip}:5000/relay/${e.parentElement.parentElement.getAttribute("relay")}/1`);
        new nuvie_alert(`Powering On`, `Requesting ${e.parentElement.parentElement.getAttribute("device-name")} to be powered on`, 4, false);
        $(e).addClass("on").removeClass("off");
        $(e).html("Power On");
    }
    else {
        if (e.parentElement.parentElement.getAttribute("master-device") == 'true') {
            swal({
                title: "Master Device Detected",
                text: "Rebooting a master device may terminate terminal connection to the host. Proceed with caution",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                if (willDelete) {
                    new nuvie_alert(`Rebooting ${e.parentElement.parentElement.getAttribute("device-name")}`, `Requesting ${e.parentElement.parentElement.getAttribute("device-name")} to be rebooted`, 4, false);
                    $(e).html("Reboot Requested");
                    setTimeout(() => {
                        $(e).html("Reboot");
                    }, 2000);
                }
            });
        }
        else {
            $.get(`http://${server_ip}:5000/relay/${e.parentElement.parentElement.getAttribute("relay")}/0`);
            new nuvie_alert(`Powering Off`, `Requesting ${e.parentElement.parentElement.getAttribute("device-name")} to be powered down`, 4, false);
            $(e).addClass("off").removeClass("on");
            $(e).html("Power Off");
        }
    }
};
$(".power").on("click", (e) => {
    changeState(e.currentTarget);
});
// new nuvie_alert("Simulation Mode Activated", "System is replicating the use of an origical meter now. To exit simulation mode, turn of debug mode and ensure GPIO pins are configured and calibrated correctly", 0, false)
const data_display = {
    chart: {
        height: 180,
        type: "line",
        stacked: false,
        toolbar: {
            show: false
        }
    },
    colors: ["#FF1654"],
    series: [],
    noData: {
        text: 'Retriving Data'
    },
    stroke: {
        curve: 'smooth',
    },
    yaxis: [
        {
            axisBorder: {
                show: false
            },
            labels: {
                show: true,
                color: "#FF1654"
            }
        }
    ],
    xaxis: {
        labels: {
            show: false
        }
    },
    legend: {
        horizontalAlign: "left",
        offsetX: 40
    },
    tooltip: {
        enabled: false,
    },
};
$(".options").on('click', (e) => {
    selectedDevice.deviceName = e.target.parentElement.parentElement.getAttribute("device-name");
    selectedDevice.deviceID = e.target.parentElement.parentElement.getAttribute("device-id");
    if (!selectedDevice.deviceName)
        selectedDevice.deviceName = `Unnamed Device ${selectedDevice.deviceID}`;
    $("#sidePanel").css({ 'transition': '.1s all ease-in-out', 'transform': 'scale(.8)', 'opacity': '0' });
    setTimeout(() => {
        if (e.target.parentElement.parentElement.getAttribute("master-device") == 'true') {
            changeCSSVar('--width-main', '20vw');
            $("#sidePanel").html(`
        <div class="more-navigator" id="settings_data">
            <div id="go-back-setting p-1" onclick="go_to_main()" class="settings"><i class="fas fa-chevron-left"></i></div>
            <h3 class="prnt_selected_device p-1" id="prnt_selected_device">${selectedDevice.deviceName}</h3>
            <div onclick="systemToScreen('http://192.168.0.1', '${selectedDevice.deviceName}')"><i class="fas fa-expand"></i></div>
        </div>
                <iframe src="http://192.168.0.1" title="${selectedDevice.deviceName} Configuration" loading="lazy" name="${selectedDevice.deviceName} Configuration"></iframe>
            `);
        }
        else {
            changeCSSVar('--width-main', '60vw');
            $("#sidePanel").html(`
        <div class="more-navigator" id="settings_data">
            <div id="go-back-setting p-1"  onclick="go_to_main()" class="settings"><i class="fas fa-chevron-left settings" id="go-back-setting"></i></div>
            <h3 class="prnt_selected_device" id="prnt_selected_device">${selectedDevice.deviceName}</h3>
        </div>
        <div class="state_show">
            <div id="display_selected"></div>
            <div class="showload">
                <div class="currentload">
                    <div class="activePw">
                        <div class="load" id="curr_seldev">Getting Current Power</div>
                    </div>
                </div>
                <div class="avg_load">
                    <div class="min-peak">
                        Minimum
                        <span id="min-peak_seldev">
                            ...
                        </span>
                    </div>
                    <div class="avg-peak">
                        Average
                        <span id="avg-peak_seldev">
                            ...
                        </span>
                    </div>
                    <div class="max-peak">
                        Maximum
                        <span id="max-peak_seldev">
                            ...
                        </span>
                    </div>
                </div>
            </div>
            <div class="info_state">
                <h4>Settings</h4>
                <div class="row">
                    <div class="col">
                        <h5>Turn on <span class="prnt_selected_device">${selectedDevice.deviceName}</span></h5>
                        <p>Toggle this setting to turn on and off <span
                                class="prnt_selected_device">${selectedDevice.deviceName}</span></p>
                    </div>
                    <div class="col w-20">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="selected_on_off">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h5>Scheduled Action</h5>
                        <div class="row subset">
                            <div class="col subsetdesc">
                                <p>Turn on <span class="prnt_selected_device">${selectedDevice.deviceName}</span> at a specified time</p>
                            </div>
                            <div class="col w-20 subset">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="selected_on_specify">
                                </div>
                            </div>
                        </div>
                        <div class="row subset">
                            <div class="col subsetdesc">
                                <p>Turn off <span class="prnt_selected_device">${selectedDevice.deviceName}</span> at a specified time</p>
                            </div>
                            <div class="col w-20 subset">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="selected_off_specify">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h5 class="w-100">Smart Actions</h5>
                        <div class="row subset">
                            <div class="col subsetdesc">
                                <p>Turn on <span class="prnt_selected_device">${selectedDevice.deviceName}</span> when a paired bluetooth device comes in proximity of the HUB</p>
                            </div>
                            <div class="col w-20 subset">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="smartOn">
                                </div>
                            </div>
                        </div>
                        <div class="row subset">
                            <div class="col subsetdesc">
                                <p>Turn off <span class="prnt_selected_device">${selectedDevice.deviceName}</span> when a paired bluetooth device is not detected by the HUB for more than 5 minutes</p>
                            </div>
                            <div class="col w-20 subset">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="smartOff">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btn-group w-100" role="group" aria-label="">
                    <button type="button" class="btn btn-warn">Reset ${selectedDevice.deviceName}</button>
                    <button type="button" class="btn btn-danger">Delete ${selectedDevice.deviceName}</button>
                </div>
            </div>
        </div>`);
            var chart_individual = new ApexCharts(document.querySelector("#display_selected"), data_display);
            chart_individual.render();
            const url = `http://${server_ip}:5000/sysinfo`;
            $.getJSON(url, (response) => {
                chart_individual.updateSeries([{
                        name: 'Power',
                        data: response
                    }]);
                let load_avg = 0, load_min = 0, load_max = 0;
                for (let i = 0; i < Object.values(response).length; i++) {
                    const curr = Object.values(response)[i]['y'];
                    load_avg = load_avg + curr;
                    if (i === 0 && curr != 0)
                        load_min = curr;
                    if (curr != 0 && load_min > curr)
                        load_min = curr;
                    if (load_max < curr)
                        load_max = curr;
                }
                $(`#curr_seldev`).html(`${Object.values(response)[Object.values(response).length - 1]['y']} W`);
                $(`#min-peak_seldev`).html(`${load_min} W`);
                $(`#avg-peak_seldev`).html(`${Math.round(load_avg / Object.values(response).length)} W`);
                $(`#max-peak_seldev`).html(`${load_max} W`);
            });
        }
        $("#sidePanel").css({ 'transition': '.1s all ease-in-out', 'transform': 'scale(1)', 'opacity': '1' });
    }, 200);
    if (!selectedDevice.deviceName)
        new nuvie_alert("Configuration Error", "Selected device has no name. Please provde one", 1, false);
});
const go_to_main = () => {
    changeCSSVar('--width-main', '60vw');
    $("#sidePanel").css({ 'transition': '.1s all ease-in-out', 'transform': 'scale(.8)', 'opacity': '0' });
    display_state_host();
};
const display_state_host = () => {
    const url = `http://${server_ip}:5000/sysinfo`;
    const hubname = "...";
    const sys_version = "...";
    const os_handle = "...";
    const cpu_use = "...";
    const ram_use = "...";
    let boot_time = "...";
    const devices_conn = "...";
    const wifi_name = "...";
    boot_time = "...";
    const data_disp = `<div class="more-navigator" id="settings_data">
        <h3 class="prnt_selected_device" id="prnt_selected_device">Dashboard</h3>
    </div>
    <div class="container" id="conn_stat_ssid">
        <i class="fas fa-wifi indicator"></i>
        <h3 id="conn_stat_ssid">Getting Details...</h3>
    </div>
    <div class="overflow-container">
        <h4>HUB Data</h4>
        <div class="row mainPanel">
            <div class="col">
                <desc>HUB Name</desc>
                <name id="hub_name">${hubname}</name>
            </div>
            <div class="col">
                <desc>CPU Usage</desc>
                <name id="cpu_use">${cpu_use}</name>
            </div>
            <div class="col">
                <desc>RAM Usage</desc>
                <name id="ram_use">${ram_use}</name>
            </div>
            <div class="col">
                <desc>Total Connected Device</desc>
                <name id="dev_conn">${devices_conn}</name>
            </div>
            <div class="col">
                <desc>Server Start Time</desc>
                <name id="boot_time">${boot_time}</name>
            </div>
        </div>
        <h4>Power Usage</h4>
        <div class="row mainPanel">
        <div class="col">
            <desc>Peak Power</desc>
            <name id="peak_pw_load">...</name>
        </div>
        <div class="col">
            <desc>Average Power</desc>
            <name id="avg_pw_load">...</name>
        </div>
        <div class="col">
                <desc>Lowest Power</desc>
                <name id="low_pw_load">...</name>
            </div>
            <div class="col">
                <desc>Estimated Cost</desc>
                <name>Rs 0</name>
            </div>
        </div>
    </div>`;
    setTimeout(() => {
        $("#sidePanel").html(data_disp);
        $("#sidePanel").css({ 'transition': '.1s all ease-in-out', 'transform': 'scale(1)', 'opacity': '1' });
    }, 200);
    $.getJSON(url, (response) => {
        const sys_version = response.system_version;
        const os_handle = response.os_handler;
        let boot_time = response.boot_time;
        boot_time = new Date(boot_time);
        boot_time = `<span style="font-size: 1rem">${(boot_time.getHours() == 0) ? 12 : boot_time.getHours()}:${boot_time.getMinutes()} ${(boot_time.getHours() < 12) ? 'AM' : 'PM'}  ${boot_time.getDate()}/${boot_time.getMonth()}/${boot_time.getFullYear()}</span>`;
        $("#hub_name").html(response.hostname);
        $("#cpu_use").html(`${response.cpu_usage}%`);
        $("#ram_use").html(`${response.memory_usage}%`);
        $("#dev_conn").html(`${response.dev_conn} devices`);
        $("#boot_time").html(`${boot_time} devices`);
        $("#conn_stat_ssid").html(`<i class="fas fa-wifi indicator"></i>
        <h3 id="conn_stat_ssid">Connected to ${response.wifi}</h3>`);
        setTimeout(() => {
            $("#sidePanel").html(data_disp);
            $("#sidePanel").css({ 'transition': '.1s all ease-in-out', 'transform': 'scale(1)', 'opacity': '1' });
        }, 200);
    }).fail(() => {
        $("#hub_name").html(`...`);
        $("#cpu_use").html(`...`);
        $("#ram_use").html(`...`);
        $("#dev_conn").html(`...`);
        $("#conn_stat_ssid").html(`<i class="fas fa-exclamation-triangle indicator"></i><h3 id="conn_stat_ssid">Unable to connect to HUB</h3>`);
    });
};
const systemToScreen = (uri, title) => {
    $('#body').append(`<div class="popup">
    <div class="tab">
    <div class="p-1" onclick="destroy_popup()"><i class="fas fa-times"></i></div>
    <div id="popup_title">${title}</div>
    </div>
    <div class="main" id="popup_display">
    <iframe class="w-100 h-100" src="${uri}"></iframe>
    </div>
    </div>`);
    $('.popup').css({ 'transition': '0s', 'opacity': '0', 'transform': 'scale(1.5)' });
    setTimeout(() => {
        $('.popup').css({ 'transition': '.2s all ease-in-out', 'opacity': '1', 'transform': 'scale(1)' });
    }, 200);
};
const destroy_popup = () => {
    $('.popup').css({ 'opacity': '0', 'transform': 'scale(1.2)', 'transition': '.1s all ease-in-out' });
    setTimeout(() => {
        $(".popup").remove();
    }, 300);
};
display_state_host();
setInterval(() => {
    const url = `http://${server_ip}:5000/sysinfo`;
    $.getJSON(url, (response) => {
        $("#hub_name").html(response.hostname);
        $("#cpu_use").html(`${response.cpu_usage}%`);
        $("#ram_use").html(`${response.memory_usage}%`);
        $("#dev_conn").html(`${response.dev_conn} devices`);
        $("#conn_stat_ssid").html(`<i class="fas fa-wifi indicator"></i>
        <h3 id="conn_stat_ssid">Connected to ${response.wifi}</h3>`);
        if (document.querySelector("#boot_time").innerHTML == "...") {
            let boot_time = response.boot_time;
            boot_time = new Date(boot_time);
            boot_time = `<span style="font-size: 1rem">${(boot_time.getHours() == 0) ? 12 : boot_time.getHours()}:${boot_time.getMinutes()} ${(boot_time.getHours() < 12) ? 'AM' : 'PM'}  ${boot_time.getDate()}/${boot_time.getMonth()}/${boot_time.getFullYear()}</span>`;
            $("#boot_time").html(`${boot_time}`);
        }
    }).fail(function () {
        $("#hub_name").html(`...`);
        $("#cpu_use").html(`...`);
        $("#ram_use").html(`...`);
        $("#dev_conn").html(`...`);
        $("#conn_stat_ssid").html(`<i class="fas fa-exclamation-triangle indicator"></i><h3 id="conn_stat_ssid">Unable to connect to HUB</h3>`);
    });
}, 2000);
