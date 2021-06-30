class nuvie_alert {
    constructor(title, desc, type, button) {
        const attr = [`alert-success`, `alert-danger`, `alert-warn`, `alert-neutral`, `alert-info`];
        this.title = title;
        this.desc = desc;
        if (type == 0 || type == 'success')
            this.type = 'alert-success';
        else if (type == 1 || type == 'danger')
            this.type = 'alert-danger';
        else if (type == 2 || type == 'warn')
            this.type = 'alert-warn';
        else if (type == 3 || type == 'neutral')
            this.type = 'alert-neutral';
        else if (type == 4 || type == 'info')
            this.type = 'alert-info';
        else if (attr.includes(type.toString()))
            this.type = type;
        if (button != false) {
            this.button = {
                on_accept: {
                    title: button['on_accept']['title'],
                    execute: button['on_accept']['execute']
                },
                on_decline: {
                    title: button['on_decline']['title'],
                    execute: button['on_decline']['execute']
                }
            };
        } else {
            this.button = false;
        }
        if (this.title.toString() != "" || this.title.toString() != null || this.title.toString() != "false")
            this.construct_alert();
        else {
            console.group("Error Detected");
            console.info(`Error Originated from nuvie_alert_system`);
            console.error(`Provided Call method provides insufficient data to create an alert call`);
            console.warn("Check if you have provided appropriate fields. \n\nField Property: title: string, desc: string, type: number(0 to 4) | string(success, danger, warn, neutral, info), button: false | {on_accept: {title: 'specify button value', execute: 'Function that needs to be executed when button is pressed'}, on_decline :{title: 'specify button value', execute: 'Function that needs to be executed when button is pressed'}}");
            console.groupEnd();
        }
    }
    construct_alert() {
        try {
            const icons = {
                "alert_danger": `<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxlbGxpcHNlIHN0eWxlPSJmaWxsOiNFMDRGNUY7IiBjeD0iMjU2IiBjeT0iMjU2IiByeD0iMjU2IiByeT0iMjU1LjgzMiIvPg0KPGcgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNzA3MSAwLjcwNzEgLTAuNzA3MSAtMC43MDcxIDc3LjI2IDMyKSI+DQoJPHJlY3QgeD0iMy45OCIgeT0iLTQyNy42MTUiIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiB3aWR0aD0iNTUuOTkyIiBoZWlnaHQ9IjI4NS42NzIiLz4NCgk8cmVjdCB4PSItMTEwLjgyOCIgeT0iLTMxMi44MTUiIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiB3aWR0aD0iMjg1LjY3MiIgaGVpZ2h0PSI1NS45OTIiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />`,
                "alert_warn": `<img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTU3LjM2MiAyNi41NC0zNy4yNjIgNjQuNTM1YTcuNjY2IDcuNjY2IDAgMCAwIDYuNjM5IDExLjVoNzQuNTE4YTcuNjY2IDcuNjY2IDAgMCAwIDYuNjM5LTExLjVsLTM3LjI1OC02NC41MzVhNy42NjUgNy42NjUgMCAwIDAgLTEzLjI3NiAweiIgZmlsbD0iI2ZmYjQwMCIvPjxnIGZpbGw9IiNmY2Y0ZDkiPjxyZWN0IGhlaWdodD0iMjkuMzc3IiByeD0iNC4zMzMiIHdpZHRoPSI5LjYzOCIgeD0iNTkuMTgxIiB5PSI0Ni40NDQiLz48Y2lyY2xlIGN4PSI2NCIgY3k9Ijg3LjQyOCIgcj0iNC44MTkiLz48L2c+PC9nPjwvc3ZnPg==" />`,
                "alert_success": `<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTAgNTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwIDUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Y2lyY2xlIHN0eWxlPSJmaWxsOiMyNUFFODg7IiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiLz4NCjxwb2x5bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIHBvaW50cz0iDQoJMzgsMTUgMjIsMzMgMTIsMjUgIi8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />`,
                "alert_neutral": `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">    <path d="M 54.548828 17.074219 C 51.975717 17.012183 49.566016 17.539844 47.400391 18.699219 C 42.900391 21.099219 40.1 25.8 39 32 L 17 64.599609 C 16 65.999609 15.199609 67.599219 14.599609 69.199219 C 12.299609 75.799219 14.099219 81.799219 17.699219 88.699219 C 18.399219 90.099219 18.100781 91.799219 16.800781 92.699219 C 16.300781 93.099219 15.699609 93.199219 15.099609 93.199219 C 13.999609 93.199219 13.100391 92.499609 12.400391 91.599609 C 9.0003906 86.899609 8.2 81.099219 8 78.699219 C 8 78.099219 7.4007813 77.700781 6.8007812 77.800781 C 6.2007813 77.900781 5.7007812 78.100781 5.3007812 78.300781 C 3.9007813 79.000781 1.6007813 81.099609 1.8007812 86.099609 C 2.0007812 86.899609 2.0992187 87.7 2.1992188 88.5 C 2.5992187 90.9 3.5007812 93.400781 4.8007812 95.800781 C 6.5007813 99.000781 8.7996094 101.8 11.099609 103.5 C 13.299609 105.1 15.199219 105.59961 16.699219 105.59961 C 17.999219 105.59961 18.899609 105.20039 19.599609 104.90039 C 20.199609 104.60039 20.999219 104 21.699219 103 L 31.099609 103 L 31.099609 111 C 31.099609 116 35.099609 120 40.099609 120 L 58.099609 120 C 63.099609 120 67.099609 116 67.099609 111 L 67.099609 103 L 76.900391 103 C 80.000391 104.4 83.000391 105.09961 85.900391 105.09961 C 88.300391 105.09961 90.599609 104.6 92.599609 103.5 C 98.899609 100.2 102 92.2 101.5 81.5 L 110.30078 83.199219 C 110.50078 83.199219 110.70039 83.300781 110.90039 83.300781 C 112.40039 83.300781 113.80039 82.1 113.90039 80.5 C 114.00039 79 112.90039 77.600781 111.40039 77.300781 L 91 73.300781 C 89.2 72.900781 87.400391 74.300781 87.400391 76.300781 C 87.400391 77.800781 88.500391 79.000781 89.900391 79.300781 L 95.199219 80.300781 C 95.999219 89.300781 93.899609 95.999219 89.599609 98.199219 C 81.699609 102.39922 65.3 92.000781 53.5 69.800781 C 41.7 47.700781 42.299219 28.2 50.199219 24 C 57.099219 20.3 69.600781 27.800781 79.800781 41.800781 C 80.700781 43.000781 82.2 43.500391 83.5 42.900391 C 85.3 42.100391 85.799219 39.900391 84.699219 38.400391 C 75.011719 25.041016 63.73851 17.295776 54.548828 17.074219 z M 86.863281 17.439453 C 85.901367 17.426758 84.925781 17.886719 84.300781 18.699219 L 81.699219 22.300781 C 80.699219 23.600781 81.100391 25.5 82.400391 26.5 C 82.900391 26.9 83.499609 27.099609 84.099609 27.099609 C 84.999609 27.099609 86 26.700781 86.5 25.800781 L 89.199219 22.199219 C 90.199219 20.899219 89.8 19 88.5 18 C 88.0125 17.625 87.44043 17.44707 86.863281 17.439453 z M 104.54492 39.732422 C 103.9666 39.682617 103.36328 39.799609 102.80078 40.099609 L 87.800781 48.099609 C 87.900781 48.199609 87.800781 48.199219 87.800781 48.199219 C 87.700781 48.199219 87.699609 48.200781 87.599609 48.300781 C 86.099609 49.100781 85.600391 50.900391 86.400391 52.400391 C 88.800391 56.900391 90.699219 61.400391 92.199219 65.900391 C 92.599219 67.200391 93.8 68 95 68 C 95.3 68 95.600391 68.000781 95.900391 67.800781 C 97.500391 67.300781 98.300781 65.6 97.800781 64 C 96.500781 60.1 94.900391 56.099219 92.900391 52.199219 L 105.69922 45.400391 C 107.19922 44.600391 107.70039 42.800781 106.90039 41.300781 C 106.40039 40.363281 105.50879 39.81543 104.54492 39.732422 z M 68.257812 47.042969 C 65.838623 47.017212 63.380859 47.582031 61.099609 48.800781 C 60.999609 48.900781 60.900781 48.9 60.800781 49 L 60.199219 49.300781 C 55.699219 51.700781 55.4 58.999219 59.5 66.699219 C 62.8 72.799219 67.400391 76.5 71.400391 76.5 C 72.400391 76.5 73.400781 76.300781 74.300781 75.800781 C 74.500781 75.700781 74.700781 75.6 74.800781 75.5 C 74.900781 75.5 74.999219 75.400391 75.199219 75.400391 C 78.699219 73.500391 81.3 70.4 82.5 66.5 C 83.7 62.7 83.300391 58.599609 81.400391 55.099609 C 78.719141 50.012109 73.580029 47.099634 68.257812 47.042969 z M 123.40039 79.574219 C 122.62539 79.574219 121.85078 79.850391 121.30078 80.400391 C 120.70078 81.000391 120.40039 81.7 120.40039 82.5 C 120.40039 82.7 120.4 82.899609 120.5 83.099609 C 120.3 83.399609 120.4 83.599219 120.5 83.699219 C 120.6 83.899219 120.70078 84.099219 120.80078 84.199219 C 120.90078 84.399219 120.99922 84.499219 121.19922 84.699219 C 121.79922 85.299219 122.50078 85.599609 123.30078 85.599609 C 124.10078 85.599609 124.90039 85.299219 125.40039 84.699219 C 125.50039 84.599219 125.70078 84.399219 125.80078 84.199219 C 125.90078 83.999219 125.99961 83.899219 126.09961 83.699219 C 126.19961 83.499219 126.20078 83.299609 126.30078 83.099609 C 126.30078 82.899609 126.40039 82.7 126.40039 82.5 C 126.40039 81.7 126.1 80.900391 125.5 80.400391 C 124.95 79.850391 124.17539 79.574219 123.40039 79.574219 z M 37 103 L 61 103 L 61 111 C 61 112.7 59.7 114 58 114 L 40 114 C 38.3 114 37 112.7 37 111 L 37 103 z"></path></svg>`,
                "alert_info": `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1Ljk5OSA0NS45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM5LjI2NCw2LjczNmMtOC45ODItOC45ODEtMjMuNTQ1LTguOTgyLTMyLjUyOCwwYy04Ljk4Miw4Ljk4Mi04Ljk4MSwyMy41NDUsMCwzMi41MjhjOC45ODIsOC45OCwyMy41NDUsOC45ODEsMzIuNTI4LDAgICAgQzQ4LjI0NSwzMC4yODEsNDguMjQ0LDE1LjcxOSwzOS4yNjQsNi43MzZ6IE0yNS45OTksMzNjMCwxLjY1Ny0xLjM0MywzLTMsM3MtMy0xLjM0My0zLTNWMjFjMC0xLjY1NywxLjM0My0zLDMtM3MzLDEuMzQzLDMsM1YzM3ogICAgIE0yMi45NDYsMTUuODcyYy0xLjcyOCwwLTIuODgtMS4yMjQtMi44NDQtMi43MzVjLTAuMDM2LTEuNTg0LDEuMTE2LTIuNzcxLDIuODc5LTIuNzcxYzEuNzY0LDAsMi44OCwxLjE4OCwyLjkxNywyLjc3MSAgICBDMjUuODk3LDE0LjY0OCwyNC43NDYsMTUuODcyLDIyLjk0NiwxNS44NzJ6IiBmaWxsPSIjM2I4MmY2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />`
            };
            const colapse = `<div class="alert_bodyShell"><div style="border-radius: 1rem;" class="alert"><div class="main" style="padding: 1px;"><div class="content" style="width: 100%;"><div class="title" style="font-size: .8rem;text-align: center;color: var(--blue-600);">Colapse all alerts</div></div></div></div></div>`;
            const close = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 16 4 C 9.3844239 4 4 9.3844287 4 16 C 4 22.615571 9.3844239 28 16 28 C 22.615576 28 28 22.615571 28 16 C 28 9.3844287 22.615576 4 16 4 z M 16 6 C 21.534697 6 26 10.465307 26 16 C 26 21.534693 21.534697 26 16 26 C 10.465303 26 6 21.534693 6 16 C 6 10.465307 10.465303 6 16 6 z M 12.707031 11.292969 L 11.292969 12.707031 L 14.585938 16 L 11.292969 19.292969 L 12.707031 20.707031 L 16 17.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 17.414062 16 L 20.707031 12.707031 L 19.292969 11.292969 L 16 14.585938 L 12.707031 11.292969 z"></path></svg>`;
            if (this.button != false)
                this.message = `<div class="buttons"><button class="open-alert" onclick="${this.button['on_accept']['execute']}">${this.button['on_accept']['title']}</button><button class="close-alert" onclick="${this.button['on_decline']['execute']}">${this.button['on_decline']['title']}</button></div>`;
            else
                this.message = "";
            if (this.desc != "")
                this.desc = `<div class="description">${this.desc}</div>`;
            const id = Math.random().toString(36).substring(2, 7);
            // const styleSheet = `<style class="${id} ">.alert {position: fixed;right: 10px;top: 10px;width: clamp(300px, 700px, 500px);height: max-content;box-shadow: 0px 0px 15px 0px var(--grey-300);border-radius: .25rem;animation: alert_box-in 5s 1 forwards;background-color: var(--grey-50);overflow: hidden;.style {width: 4px;border-radius: 5rem;margin: 0px 5px 0px 0px;padding: 0 !important;}&:hover {animation-play-state: paused;}.buttons {display: flex;* {width: 100%;}.open-alert {color: var(--green-800);background-color: var(--green-100);padding: 5px;border:none;}.close-alert {color: var(--green-800);background-color: var(--red-100);padding: 5px;border:none;}}.main {display: flex;padding: 10px;* {padding: 3px;}.icon {display: flex;align-items: center;justify-content: center;margin-right: 10px;img , svg{width: 45px;max-width: 45px;height: 45px;max-height: 45px;transition: .5s all ease-in-out;}}.content {.title{font-size: 1.3em;}.description {font-size: .85em;line-height: calc(.8em + 5px);}}}&.alert-danger {.style {background-color: var(--red-100);}.title {color: var(--red-700);}}&.alert-success {.style {background-color: var(--green-300);}.title {color: var(--green-700);}}&.alert-warn {.style {background-color: var(--yellow-300);}.title {color: var(--yellow-700);}}@keyframes alert_box-in {0%{right: -50vw; transform: scale(.3);}10% {right: 10px; transform: scale(1)}90%{right: 10px; transform: scale(1)}100%{right: -50vw; transform: scale(.3)}}}@media screen and (max-width: 992px) {.alert {top: 1%;left: 50%;transform: translate(-50%);width: 98vw;animation: alert_box-in 5s forwards;.style_mobile {width: 100%;height: 3px;animation: alert_box-timeout_display 5s forwards;}.style {display: none;}&.alert-danger {.style_mobile {background-color: var(--red-100);}}&.alert-success {.style_mobile {background-color: var(--green-300);}}&.alert-warn {.style_mobile {background-color: var(--yellow-300);}}}   @keyframes alert_box-in {0%{transform: scale(.5) translate(-75%) translateY(-20vh); top:-15% }10% {transform: scale(1) translate(-50%) translateY(0vh); top:1%}90%{transform: scale(1) translate(-50%) translateY(0vh); top:1%}100%{transform: scale(.5) translate(-75%) translateY(-20vh); top:-15%}}@keyframes alert_box-timeout_display {0% {width: 100%;}100%{width: 0;}}}</style>`;
            const text_append = `
        <div class="alert_bodyShell" id="${id}_alert_bodyShell">
            <div class="alert ${this.type}" class=${id}>
                <div class="style_mobile" id="count_representer_${id}"></div>
                <div class="main">
                    <div class="close ${this.type}_close">${close}</div>
                    <div class="style"></div>
                    <div class="icon ${this.type}_icon">
                        ${icons[this.type.toString().replace("-", "_")]}
                    </div>
                    <div class="content">
                        <div class="title">${this.title}</div>
                        ${this.desc}
                    </div>
                </div>${this.message}
            </div>
        </div>`;
            if (document.getElementsByClassName("alert_system_systemGenerated").length == 0) {
                $('body').append("<div class='alert_system_systemGenerated'></div>");
                const resizeObserver = new ResizeObserver(() => {
                    if (document.getElementsByClassName("alert_system_systemGenerated")[0].scrollHeight >= (window.innerHeight)) {
                        console.warn("Alert Overload. Consolidating Previoud Alerts");
                        const last_knownChild = document.getElementsByClassName("alert_system_systemGenerated")[0].childNodes[document.getElementsByClassName("alert_system_systemGenerated")[0].childNodes.length - 1];
                        $(last_knownChild).fadeOut('fast');
                        setTimeout(() => {
                            $(last_knownChild).remove();
                        }, 600);
                    }
                });
                resizeObserver.observe(document.getElementsByClassName("alert_system_systemGenerated")[0]);
            }
            $('.alert_system_systemGenerated').prepend(`<div id="${id}">${text_append}</div>`);
            const clear = () => {
                $(`#${id}_alert_bodyShell`).css({
                    'transition': '.3s all ease-in',
                    'transform': 'scale(0)'
                });
                setTimeout(() => {
                    $(`#${id}_alert_bodyShell`).remove();
                    setTimeout(() => {
                        console.log(`Alert Box ${id} was removed`)
                        $(`#${id}`).remove();
                    }, 200);
                }, 700);
                $(`[REMOVED] Alert ID ${id} was removed`);
            };
            $(`.${this.type}_close`).on('click', () => {
                $(`#${id}`).css({
                    'transition': '.1s all ease-in',
                    'transform': 'scale(0)'
                });
                $(`#${id}_alert_bodyShell`).css({
                    'transition': '.3s all ease-in',
                    'transform': 'scale(0)'
                });
                setTimeout(() => {
                    $(`#${id}_alert_bodyShell`).remove();
                    console.log(`Alert Box ${id}_alert_bodyShell was removed`)
                }, 700);
                setTimeout(() => {
                    console.log(`Alert Box ${id} was removed`)
                    $(`#${id}`).remove();
                }, 200);
            });
            setTimeout(clear, 5000);
        } catch (Exception) {
            console.group("Aurora Error Reporting");
            console.log("Error Origin > Alert System");
            console.warn(`Caught Error. Browser Returned ${Exception}`);
        }
    }
}