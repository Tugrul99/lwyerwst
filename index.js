const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');

        } else {
            entry.target.classList.remove('show');
        }

    });
});

const secondhiddenElements = document.querySelectorAll('.lhidden');

secondhiddenElements.forEach((el) => observer.observe(el));

const secondObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('slowly');

        } else {
            entry.target.classList.remove('slowly');
        }

    });
});
const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => secondObserver.observe(el));



