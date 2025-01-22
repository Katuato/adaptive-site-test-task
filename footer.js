window.addEventListener('resize', function() {
    adjustFooterStructure();
});

window.addEventListener('DOMContentLoaded', function() {
    adjustFooterStructure();
});


function adjustFooterStructure() {
    const footerContent = document.querySelector('footer');
    const footerColumns = document.querySelectorAll('.footer-column-1, .footer-column-2, .footer-column-3, .footer-column-4');

    

    if (window.innerWidth <=770) {
        footerColumns.forEach(column => {
            while (column.firstChild) {
                footerContent.appendChild(column.firstChild);
            }
            column.remove();
        });
    } else {

        if (!document.querySelector('.footer-column-1')) {

            const footerColumn1 = document.createElement('div');
            footerColumn1.classList.add('footer-column-1');
            footerContent.insertBefore(footerColumn1, footerContent.firstChild);

            const footerLogo = document.querySelector('.footer-logo');
            const footerTextDiv = document.querySelector('.footer-text-policy');

            footerColumn1.appendChild(footerLogo);
            footerColumn1.appendChild(footerTextDiv);
        }

        if (!document.querySelector('.footer-column-2')) {
            const footerColumn2 = document.createElement('div');
            footerColumn2.classList.add('footer-column-2');
            footerContent.insertBefore(footerColumn2, footerContent.children[1]);

            const address = document.querySelector('.address');


            const contacts = document.querySelector('.contacts');

            footerColumn2.appendChild(address);
            footerColumn2.appendChild(contacts);
        }

        if (!document.querySelector('.footer-column-3')) {
            const footerColumn3 = document.createElement('div');
            footerColumn3.classList.add('footer-column-3');
            footerContent.insertBefore(footerColumn3, footerContent.children[2]);


            const servicesSpan = document.querySelector('.column-3-title');
            const servicesDiv = document.querySelector('.column-3-links');
            footerColumn3.appendChild(servicesSpan);
            footerColumn3.appendChild(servicesDiv);
        }

        if (!document.querySelector('.footer-column-4')) {
            const footerColumn4 = document.createElement('div');
            footerColumn4.classList.add('footer-column-4');
            footerContent.appendChild(footerColumn4);

            const legalDiv = document.querySelector('.column-4-links');
            const paymentMethods = document.querySelector('.payment-methods');
            paymentMethods.classList.add('payment-methods');
            footerColumn4.appendChild(legalDiv);
            footerColumn4.appendChild(paymentMethods);
        }
    }
}


