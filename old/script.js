// تابع تغییر حالت دارک مود
function toggleDarkMode() {
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // تغییر حالت دارک مود
    body.classList.toggle('dark-mode');

    // تغییر رنگ دکمه با کلاس active
    darkModeToggle.classList.toggle('active');
}

// منوی نوبار
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

// بارگذاری هدر و فوتر با استفاده از AJAX
$(document).ready(function() {
    // بارگذاری هدر
    $.ajax({
        url: 'header.html',
        method: 'GET',
        success: function(data) {
            $('body').prepend(data); // هدر در بالای بدنه قرار می‌گیرد
        },
        error: function() {
            console.log('Error loading header');
        }
    });

    // بارگذاری فوتر
    $.ajax({
        url: 'footer.html',
        method: 'GET',
        success: function(data) {
            $('body').append(data); // فوتر در پایین بدنه قرار می‌گیرد
        },
        error: function() {
            console.log('Error loading footer');
        }
    });

    // بارگذاری پروژه‌ها به صورت پیش‌فرض
    loadProjects('university');

    // رویداد کلیک برای آیتم‌های دسته‌بندی
    $('.category-item').click(function() {
        const type = $(this).attr('id') === 'tech-projects-btn' ? 'tech' : 'university';
        loadProjects(type);
        toggleActiveCategory($(this));
    });
});

// تابع برای بارگذاری پروژه‌ها از فایل projects.html
function loadProjects(type) {
    $.ajax({
        url: 'projects.html',
        method: 'GET',
        success: function(data) {
            const projects = $(data).find('#' + type + '-projects .project-card');
            const projectContent = $('#project-content');
            projectContent.empty();  // حذف محتوای قبلی

            // اضافه کردن پروژه‌ها به صفحه
            projects.each(function() {
                projectContent.append($(this));
            });
        },
        error: function() {
            console.log('Error loading projects.');
        }
    });
}

// تابع تغییر کلاس active برای دسته‌بندی‌ها
function toggleActiveCategory(selected) {
    $('.category-item').removeClass('active');
    selected.addClass('active');
}
