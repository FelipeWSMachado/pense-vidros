export const contact = {
  email: 'ildo.pvidros@gmail.com',
  address: 'Rua Airton Senna da Silva, 246 - Fruteira - Laurentino - SC',
  instagram: '@pensevidros',
  instagramUrl: 'https://instagram.com/pensevidros',
  whatsapp: [
    { name: 'Willyam', phone: '47988850909' },
    { name: 'Ildo', phone: '47992868872' },
  ],
}

export function whatsappLink(phone, message = 'Olá! Gostaria de um orçamento com a Pense Vidros.') {
  return `https://wa.me/55${phone}?text=${encodeURIComponent(message)}`
}
