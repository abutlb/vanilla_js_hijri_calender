class HijriCalendar {
    constructor() {
        this.months = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 
                      'جمادى الأولى', 'جمادى الثانية', 'رجب', 'شعبان',
                      'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'];
        this.weekDays = ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'];
        this.currentYear = 1445;
        this.currentMonth = 0;
        this.selectedDate = null;

        this.styles = `
            .hijri-calendar {
                display: none;
                position: absolute;
                top: 100%;
                right: 0;
                background: white;
                border: 1px solid #ddd;
                border-radius: 8px;
                padding: 15px;
                z-index: 1000;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                width: 300px;
            }
            .calendar-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 15px;
                padding-bottom: 10px;
                border-bottom: 1px solid #eee;
            }
            .calendar-grid {
                display: grid;
                grid-template-columns: repeat(7, 1fr);
                gap: 5px;
                text-align: center;
            }
            .calendar-day {
                padding: 8px;
                cursor: pointer;
                border-radius: 4px;
                transition: all 0.2s ease;
            }
            .calendar-day:hover {
                background: #f0f0f0;
                color: #009879;
            }
            .calendar-day.active {
                background: #009879;
                color: white;
            }
            .calendar-nav {
                cursor: pointer;
                padding: 5px 10px;
                border-radius: 4px;
                background: #f8f9fa;
                border: none;
                color: #009879;
            }
            .calendar-nav:hover {
                background: #e9ecef;
            }
            .calendar-selects {
                display: flex;
                gap: 10px;
            }
            .month-select, .year-select {
                padding: 5px;
                border-radius: 4px;
                border: 1px solid #ddd;
                background: white;
                cursor: pointer;
            }
            .calendar-weekday {
                font-weight: bold;
                color: #009879;
            }
        `;

        this.init();
    }

    init() {
        // Add styles
        const styleSheet = document.createElement("style");
        styleSheet.textContent = this.styles;
        document.head.appendChild(styleSheet);

        // Add event listeners
        document.getElementById('hijri-date').addEventListener('click', (e) => {
            e.stopPropagation();
            const calendarPopup = document.getElementById('calendar-popup');
            if (calendarPopup.style.display === 'none' || !calendarPopup.style.display) {
                this.renderCalendar();
                calendarPopup.style.display = 'block';
            } else {
                calendarPopup.style.display = 'none';
            }
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('#calendar-popup') && !e.target.closest('#hijri-date')) {
                document.getElementById('calendar-popup').style.display = 'none';
            }
        });

        this.renderCalendar();
    }

    getDaysInMonth(year, month) {
        return month % 2 === 0 ? 30 : 29;
    }

    generateDays(year, month) {
        const daysInMonth = this.getDaysInMonth(year, month);
        let daysHtml = '';
        
        for (let i = 1; i <= daysInMonth; i++) {
            const isSelected = this.selectedDate && 
                             this.selectedDate.year === year && 
                             this.selectedDate.month === month && 
                             this.selectedDate.day === i;
            
            daysHtml += `
                <div class="calendar-day ${isSelected ? 'active' : ''}" 
                     onclick="hijriCalendar.selectDate(${year}, ${month}, ${i})">
                    ${i}
                </div>`;
        }
        return daysHtml;
    }

    renderCalendar() {
        const calendarPopup = document.getElementById('calendar-popup');
        
        const yearOptions = Array.from(
            {length: this.currentYear - 1360 + 11}, 
            (_, i) => 1360 + i
        )
        .map(year => `<option value="${year}" ${year === this.currentYear ? 'selected' : ''}>${year}</option>`)
        .join('');
        
        const monthOptions = this.months.map((month, index) => 
            `<option value="${index}" ${index === this.currentMonth ? 'selected' : ''}>${month}</option>`).join('');

        calendarPopup.innerHTML = `
            <div class="calendar-header">
                <button class="calendar-nav" onclick="event.stopPropagation(); hijriCalendar.previousMonth()">&lt;</button>
                <div class="calendar-selects">
                    <select onchange="event.stopPropagation(); hijriCalendar.changeMonth(this.value)" class="month-select">
                        ${monthOptions}
                    </select>
                    <select onchange="event.stopPropagation(); hijriCalendar.changeYear(this.value)" class="year-select">
                        ${yearOptions}
                    </select>
                </div>
                <button class="calendar-nav" onclick="event.stopPropagation(); hijriCalendar.nextMonth()">&gt;</button>
            </div>
            <div class="calendar-grid">
                ${this.weekDays.map(day => `<div class="calendar-weekday">${day}</div>`).join('')}
                ${this.generateDays(this.currentYear, this.currentMonth)}
            </div>
        `;
    }

    selectDate(year, month, day) {
        this.selectedDate = { year, month, day };
        const formattedDate = `${day}/${month + 1}/${year}`;
        document.getElementById('hijri-date').value = formattedDate;
        this.renderCalendar();
        document.getElementById('calendar-popup').style.display = 'none';
    }

    previousMonth() {
        if (this.currentMonth === 0) {
            this.currentMonth = 11;
            this.currentYear--;
        } else {
            this.currentMonth--;
        }
        this.renderCalendar();
    }

    nextMonth() {
        if (this.currentMonth === 11) {
            this.currentMonth = 0;
            this.currentYear++;
        } else {
            this.currentMonth++;
        }
        this.renderCalendar();
    }

    changeMonth(month) {
        this.currentMonth = parseInt(month);
        this.renderCalendar();
    }

    changeYear(year) {
        this.currentYear = parseInt(year);
        this.renderCalendar();
    }
}

// Initialize the calendar
const hijriCalendar = new HijriCalendar();
