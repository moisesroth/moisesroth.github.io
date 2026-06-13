(function () {
    const data = window.PORTFOLIO_DATA;
    const params = new URLSearchParams(window.location.search);
    const privateMode = params.get("tag") === "moisesroth";

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function card(item, className) {
        return `
            <article
                class="${className || "card"}"
                data-preview-image="${escapeHtml(item.previewImage || "")}"
                data-preview-label="${escapeHtml(item.previewLabel || item.title)}"
                data-preview-title="${escapeHtml(item.title)}"
                data-preview-description="${escapeHtml(item.description)}"
            >
                <div class="card-layout ${item.previewImage ? "has-preview" : ""}">
                    <div class="card-copy">
                        <div class="card-top">
                            <span class="tag">${escapeHtml(item.tag)}</span>
                            ${item.isNew ? '<span class="badge-new">NEW</span>' : ""}
                        </div>
                        <h3>${escapeHtml(item.title)}</h3>
                        <p>${escapeHtml(item.description)}</p>
                        <a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">Open app</a>
                    </div>
                    ${item.previewImage ? `
                        <button type="button" class="card-preview" aria-label="Abrir preview de ${escapeHtml(item.title)}">
                            <span class="card-preview-frame">
                                <img src="${escapeHtml(item.previewImage)}" alt="${escapeHtml(item.previewLabel || item.title)}">
                            </span>
                        </button>
                    ` : ""}
                </div>
            </article>
        `;
    }

    function withVisibleItems(section) {
        const items = privateMode ? section.items : section.items.filter((item) => !item.private);
        return { ...section, items };
    }

    const sections = data.sections.map(withVisibleItems).filter((section) => section.items.length > 0);
    const items = sections.flatMap((section) => section.items);
    const stats = {
        sections: sections.length,
        apps: items.length,
        newItems: items.filter((item) => item.isNew).length
    };

    window.PortfolioShared = {
        card,
        data,
        items,
        params,
        privateMode,
        sections,
        stats
    };
})();
