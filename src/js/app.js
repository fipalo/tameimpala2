function loadPage(page) {
    content.empty(); // Limpiar el contenedor antes de cargar el nuevo contenido
    $.ajax({
        url: `${page}.html`,
        method: 'GET',
        success: function (data) {
            content.html(data);
        },
        error: function () {
            console.error('Error loading page');
            content.html('<p>Error carregant la pàgina. Si us plau, intenta-ho de nou.</p>');
        }
    });
}

