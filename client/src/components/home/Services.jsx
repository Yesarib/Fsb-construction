import React from 'react'
const Services = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-36 font-roboto mb-36 grid">
        <div className='w-full md:w-4/6'>
            <h1 className='flex mb-5 text-primary font-bold text-[36px] md:text-4xl'>  Hizmetlerimiz </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 mt-10">
            <div className='w-80 border-2 rounded-2xl flex flex-col justify-center items-center shadow-2xl'>
                <h1 className='text-[17px] font-semibold mt-5'>1. Servis</h1>
                <p className='text-secondary text-[15px] mt-3 ml-3 mb-10'>
                İnşaat Şirketi olarak size özel hizmetler sunuyoruz. Profesyonel ekibimizle birlikte projelerinizin tamamlanmasını sağlıyoruz. Kaliteli malzemeler ve modern tasarım anlayışıyla 1. Servisimiz size en iyi inşaat deneyimini sunmayı hedefliyor.
                </p>
            </div>
            <div className='w-80 border-2 rounded-2xl flex flex-col justify-center items-center shadow-2xl'>
                <h1 className='text-[17px] font-semibold mt-5'>2. Servis</h1>
                <p className='text-secondary text-[15px] mt-3 ml-3 mb-10'>
                İnşaat Şirketi olarak 2. Servisimizde size özel çözümler sunuyoruz. Tecrübeli ekiplerimizle birlikte her aşamada sizin yanınızdayız. İnovatif yaklaşımımız ve yaratıcı tasarımlarımızla, projelerinizi en iyi şekilde gerçekleştiriyoruz.
                </p>
            </div>
            <div className='w-80 border-2 rounded-2xl flex flex-col justify-center items-center shadow-2xl'>
                <h1 className='text-[17px] font-semibold mt-5'>3. Servis</h1>
                <p className='text-secondary text-[15px] mt-3 ml-3 mb-10'>
                İnşaat Şirketi olarak 3. Servisimizde size mükemmeliyeti sunuyoruz. Yüksek kaliteli işçilik, zamanında teslimat ve müşteri memnuniyeti odaklı çalışmalarımızla, hayallerinizdeki yapıyı gerçeğe dönüştürmek için buradayız.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Services