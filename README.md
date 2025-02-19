Hijri Calendar Picker
A modern, elegant Hijri (Islamic) calendar date picker built with pure JavaScript, featuring full Arabic localization and a clean interface.

✨ Features
Full Hijri Calendar Support: From 1360 AH onwards
Arabic Localization: Native Arabic month and weekday names
Quick Navigation:
Year selection dropdown
Month selection dropdown
Previous/Next month buttons
Smart Selection: Click to select dates
Clean UI: Modern and responsive design
RTL Support: Built for Arabic interface
Zero Dependencies: Pure JavaScript implementation
🚀 Getting Started
Installation
git clone https://github.com/yourusername/hijri-calendar.git

Copy

Execute

Basic Setup
Add these elements to your HTML:

<input type="text" id="hijri-date" readonly>
<div id="calendar-popup"></div>

Copy

Apply

Include the JavaScript file:

<script src="hijri-calendar.js"></script>

Copy

Apply

The calendar will automatically initialize and attach to the elements.

🎨 Customization
The calendar includes built-in styles that can be customized through CSS classes:

.hijri-calendar: Main calendar container
.calendar-header: Header section
.calendar-day: Individual day cells
.calendar-nav: Navigation buttons
.month-select: Month dropdown
.year-select: Year dropdown
🌐 Browser Support
Chrome
Firefox
Safari
Edge
Opera
📝 License
MIT License

🤝 Contributing
Fork the repository
Create your feature branch
Commit your changes
Push to the branch
Open a pull request
📦 Version
1.0.0

🔥 Usage Example
// The calendar automatically initializes
// You can access its methods through the global instance:
hijriCalendar.selectDate(1445, 0, 1); // Select 1 Muharram 1445

Copy

Apply

🛠️ Methods
selectDate(year, month, day)
previousMonth()
nextMonth()
changeMonth(monthIndex)
changeYear(year)
🎯 Upcoming Features
Gregorian date conversion
Custom date formatting
Event handling
Range selection
Accessibility improvements
📫 Contact
GitHub: @yourusername
Website: yourwebsite.com
Built with ❤️ for the Islamic community
