// Armazena e recupera dados do localStorage + seed inicial
const KEY = "ONG_PLUS_DB";
const defaultDB = {
  projetos: [
    { id: 1, titulo: "Campanha de Castração Comunitária", categoria: "Bem-estar Animal", meta: 18000, arrecadado: 5200, imagem: "./assets/img/p1.jpg", estado: "SP", descricao: "Meta de castrar 60 animais em parceria com clínicas locais.", urgencia: "alta" },
    { id: 2, titulo: "Resgate de Filhotes na Av. Brasil", categoria: "Resgate", meta: 12000, arrecadado: 7600, imagem: "./assets/img/p2.jpg", estado: "RJ", descricao: "Cuidado e abrigo para ninhada encontrada em via movimentada.", urgencia: "media" },
    { id: 3, titulo: "Fundo Emergencial para Cirurgias", categoria: "Saúde", meta: 25000, arrecadado: 9400, imagem: "./assets/img/p3.jpg", estado: "PR", descricao: "Cobrir custos de cirurgias e internações de urgência.", urgencia: "baixa" }
  ],
  doacoes: [],
  voluntarios: [],
  posts: [
    { id:1, titulo:"Mutirão de Castração em Novembro", data:"2025-10-15", capa:"./assets/img/post1.jpg", conteudo:"Relato do mutirão com números e fotos." }
  ]
};

export function getDB(){
  const raw = localStorage.getItem(KEY);
  if(!raw){
    localStorage.setItem(KEY, JSON.stringify(defaultDB));
    return structuredClone(defaultDB);
  }
  return JSON.parse(raw);
}

export function setDB(db){
  localStorage.setItem(KEY, JSON.stringify(db));
}
