// Adicione as fotos de cada trabalho no array "images" abaixo.
// 1. Coloque os arquivos em public/gallery/<key>/ (ex: public/gallery/box-banheiro/1.jpg)
// 2. Liste os caminhos aqui, ex: images: ['/gallery/box-banheiro/1.jpg', '/gallery/box-banheiro/2.jpg']
// Pode ter quantas fotos quiser por trabalho — o card mostra a primeira como capa
// e o clique abre a galeria completa daquele serviço.
export const gallery = [
  { key: 'box-banheiro', title: 'Box para Banheiro', icon: 'shower', images: [] },
  { key: 'janelas', title: 'Janelas de Vidro Temperado', icon: 'window', images: [] },
  { key: 'portas', title: 'Portas de Vidro', icon: 'door', images: [] },
  { key: 'guarda-corpo', title: 'Guarda-Corpo e Sacadas', icon: 'balcony', images: [] },
  { key: 'espelhos', title: 'Espelhos Lapidados e Bisotados', icon: 'mirror', images: [] },
  { key: 'divisorias', title: 'Divisórias em Vidro', icon: 'partition', images: [] },
  { key: 'vidros-seguranca', title: 'Vidros de segurança', icon: 'railing', images: [] },
  { key: 'manutencao', title: 'Manutenção e Reposição', icon: 'tool', images: [] },
]
