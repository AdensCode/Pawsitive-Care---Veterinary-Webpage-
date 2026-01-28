const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const totalDisplay = document.getElementById('totalPrice');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calculateTotal);
    });
    
    function calculateTotal () {
        let total = 0;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseInt(checkbox.dataset.price);
            }

        });
        totalDisplay.textContent = total;
         
        }

        function submitForm () {
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const address = document.getElementById('address').value;
            const message = document.getElementById('message').value;

            if (!firstName || !lastName || email) {
                alert('Please fill in all required fields (First Name, Last Name, Email)');
                return;
            }

               
            const slelectedServices = [];
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    selectedServices.push(checkbox.id);
                }
            });

            const total = totalDisplay.textContent;

            alert(`Thank you, ${firstName} ${lastName}!\n\nYour booking request has been received.\n\nSelected Services:\n${selectedServices.join('\n') || 'None'}\n\nTotal: $${total}\n\nWe'll contact you at ${email} to confirm your appointment.`);
        }

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });

        });
