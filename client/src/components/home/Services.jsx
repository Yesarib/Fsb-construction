import React from 'react'

const Services = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-20 font-roboto">
        <div className='w-4/6 flex justify-start'>
            <h1 className='flex justify-start mb-5 text-primary font-bold text-[36px]'>  Hizmetlerimiz </h1>
        </div>
        <div className="flex justify-evenly space-x-20 mt-5">
            <div className='w-80 border-2 rounded-2xl flex flex-col justify-center items-center shadow-2xl'>
                <h1 className='text-[18px] font-semibold mt-2'>1. Servis</h1>
                <p className='text-secondary text-[15px] mt-2 ml-2 mb-5'>
                İnşaat Şirketi olarak size özel hizmetler sunuyoruz. Profesyonel ekibimizle birlikte projelerinizin tamamlanmasını sağlıyoruz. Kaliteli malzemeler ve modern tasarım anlayışıyla 1. Servisimiz size en iyi inşaat deneyimini sunmayı hedefliyor.
                </p>
            </div>
            <div className='w-80 border-2 rounded-2xl flex flex-col justify-center items-center shadow-2xl'>
                <h1 className='text-[18px] font-semibold mt-2'>2. Servis</h1>
                <p className='text-secondary text-[15px] mt-2 ml-2 mb-5'>
                İnşaat Şirketi olarak 2. Servisimizde size özel çözümler sunuyoruz. Tecrübeli ekiplerimizle birlikte her aşamada sizin yanınızdayız. İnovatif yaklaşımımız ve yaratıcı tasarımlarımızla, projelerinizi en iyi şekilde gerçekleştiriyoruz.
                </p>
            </div>
            <div className='w-80 border-2 rounded-2xl flex flex-col justify-center items-center shadow-2xl'>
                <h1 className='text-[18px] font-semibold mt-2'>3. Servis</h1>
                <p className='text-secondary text-[15px] mt-2 ml-2 mb-5'>
                İnşaat Şirketi olarak 3. Servisimizde size mükemmeliyeti sunuyoruz. Yüksek kaliteli işçilik, zamanında teslimat ve müşteri memnuniyeti odaklı çalışmalarımızla, hayallerinizdeki yapıyı gerçeğe dönüştürmek için buradayız.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Services