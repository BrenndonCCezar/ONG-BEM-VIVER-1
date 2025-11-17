// util
const $  = (s,root=document)=>root.querySelector(s);
const $$ = (s,root=document)=>Array.from(root.querySelectorAll(s));

/* Menu mobile */
const navToggle = $('.nav-toggle');
const nav = $('#site-nav');
if(navToggle && nav){
  navToggle.addEventListener('click', ()=>{
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

/* Submenu (mobile) */
$$('.submenu-toggle').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const li = btn.closest('.has-submenu');
    const opened = li.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(opened));
  });
});

/* Ano no rodapé (se existir) */
const ano = $('#ano');
if(ano) ano.textContent = new Date().getFullYear();

/* TOAST helper */
function showToast(msg){
  const wrap = $('#toasts'); if(!wrap) return;
  const el = document.createElement('div');
  el.className = 'toast'; el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(()=>el.remove(), 3000);
}

/* MODAL helpers */
const modalBackdrop = $('#modal-backdrop');
const modalCloseBtn = $('#modal-close');
function openModal(title, body){
  if(!modalBackdrop) return;
  $('#modal-title').textContent = title;
  $('#modal-body').textContent = body;
  modalBackdrop.hidden = false;
  modalBackdrop.classList.add('open');
}
function closeModal(){
  if(!modalBackdrop) return;
  modalBackdrop.classList.remove('open');
  modalBackdrop.hidden = true;
}
modalCloseBtn?.addEventListener('click', closeModal);
modalBackdrop?.addEventListener('click', e=>{ if(e.target===modalBackdrop) closeModal(); });

// (Opcional) Teste rápido no console:
// showToast('Teste de toast');
// openModal('Atenção','Exemplo de modal');
