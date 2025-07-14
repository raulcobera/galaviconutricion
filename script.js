document.addEventListener('DOMContentLoaded', function() {
    // Navegación entre pestañas
    const tabLinks = document.querySelectorAll('[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Ocultar todas las pestañas
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Mostrar la pestaña seleccionada
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
            
            // Desplazamiento suave al inicio
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Actualizar la URL sin recargar
            history.pushState(null, null, `#${tabId}`);
        });
    });
    
    // Manejar clic en recetas (simulación)
    const recipeCards = document.querySelectorAll('[data-recipe]');
    recipeCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const recipeType = this.getAttribute('data-recipe');
            alert(`Próximamente: Recetas de ${recipeType}. Esta función estará disponible en la próxima actualización.`);
        });
    });
    
    // Cargar la pestaña correcta al cargar la página
    function loadInitialTab() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const targetTab = document.getElementById(hash);
            if (targetTab) {
                tabContents.forEach(content => content.classList.remove('active'));
                targetTab.classList.add('active');
            }
        }
    }
    
    // Manejar el botón de retroceso/avance del navegador
    window.addEventListener('popstate', function() {
        loadInitialTab();
    });
    
    // Actualizar enlace de novedades (ejemplo)
    function updateNewsLink() {
        // Aquí podrías cargar dinámicamente el último enlace desde una base de datos o API
        const newsLink = document.getElementById('novedad-link');
        // newsLink.href = "URL_ACTUALIZADA";
    }
    
    // Inicializar
    loadInitialTab();
    updateNewsLink();
});