// As fotos vêm de src/assets/Imagens/<pasta>/*.jpeg — para adicionar mais,
// basta soltar o arquivo na pasta correspondente (numeração define a ordem).
const modules = import.meta.glob('../assets/Imagens/*/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

function imagesFrom(folder) {
  return Object.entries(modules)
    .filter(([path]) => path.includes(`/Imagens/${folder}/`))
    .sort(([a], [b]) => {
      const numA = parseInt(a.match(/(\d+)\.\w+$/)?.[1] ?? '0', 10)
      const numB = parseInt(b.match(/(\d+)\.\w+$/)?.[1] ?? '0', 10)
      return numA - numB
    })
    .map(([, url]) => url)
}

export const gallery = [
  { key: 'box-banheiro', title: 'Box para Banheiro', icon: 'shower', images: imagesFrom('1 - box') },
  { key: 'janelas', title: 'Janelas de Vidro Temperado', icon: 'window', images: imagesFrom('2 - janela') },
  { key: 'portas', title: 'Portas de Vidro', icon: 'door', images: imagesFrom('3 - porta') },
  {
    key: 'guarda-corpo',
    title: 'Guarda-Corpo e Sacadas',
    icon: 'balcony',
    images: imagesFrom('4 - guarda corpo e sacada'),
  },
  {
    key: 'espelhos',
    title: 'Espelhos Lapidados e Bisotados',
    icon: 'mirror',
    images: imagesFrom('5 - espelho'),
  },
  {
    key: 'divisorias',
    title: 'Divisórias em Vidro',
    icon: 'partition',
    images: imagesFrom('6 - divisoria'),
  },
  {
    key: 'vidros-seguranca',
    title: 'Vidros de segurança',
    icon: 'railing',
    images: imagesFrom('7 - vidro seguranca'),
  },
  { key: 'manutencao', title: 'Manutenção e Reposição', icon: 'tool', images: imagesFrom('8 - manutencao') },
]
