document.addEventListener('DOMContentLoaded', () => {
    const formCliente = document.querySelector('#cadastro-cliente form');
    const formPet = document.querySelector('#cadastro-pet form');
    const formServico = document.querySelector('#agendamento-servico form');

    // Validação simples para o formulário de cliente
    formCliente.addEventListener('submit', (event) => {
        const nome = document.getElementById('nome').value;
        const endereco = document.getElementById('endereco').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;

        if (!nome || !endereco || !telefone || !email) {
            alert('Por favor, preencha todos os campos do formulário.');
            event.preventDefault();
        }
    });

    // Validação simples para o formulário de pet
    formPet.addEventListener('submit', (event) => {
        const nomePet = document.getElementById('nome-pet').value;

        if (!nomePet) {
            alert('Por favor, preencha o nome do pet.');
            event.preventDefault();
        }
    });

    // Validação simples para o formulário de agendamento
    formServico.addEventListener('submit', (event) => {
        const servico = document.getElementById('servico').value;
        const data = document.getElementById('data').value;
        const hora = document.getElementById('hora').value;

        if (!servico || !data || !hora) {
            alert('Por favor, preencha todos os campos do agendamento.');
            event.preventDefault();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            if (!confirm('Você realmente deseja enviar este formulário?')) {
                event.preventDefault();
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
