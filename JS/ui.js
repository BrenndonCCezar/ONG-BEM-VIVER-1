// Renderizadores de UI simples
export function cardProjeto(p){
  const progresso = Math.min(100, Math.round((p.arrecadado / p.meta) * 100));
  return `
  <article class="card">
    <div class="card__media"><img src="${p.imagem}" alt="Projeto: ${p.titulo}"></div>
    <div class="card__body">
      <span class="badge">${p.categoria}</span>
      <h3>${p.titulo}</h3>
      <div aria-label="Progresso da arrecadação" role="group">
        <div style="background:#e5e7eb;border-radius:999px;height:10px;overflow:hidden">
          <div style="width:${progresso}%;height:10px;background:var(--color-primary)"></div>
        </div>
        <small>${progresso}% de R$ ${p.meta.toLocaleString('pt-BR')}</small>
      </div>
      <div style="margin-top:.5rem;display:flex;gap:.5rem">
        <a class="btn btn--ghost" href="/projeto.html?id=${p.id}">Detalhes</a>
        <a class="btn btn--primary" href="/doar.html?projeto=${p.id}">Doar</a>
      </div>
    </div>
  </article>`;
}
