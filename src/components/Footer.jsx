import React from 'react'
import { instagram, logo, tiktok } from '../assets/data/assets'

const Footer = () => {
  return (
	<div className='w-full max-w-5xl max-sm:px-16 mx-auto'>
		<div className="border-y py-6 border-black/25 text-center">
			<h1 className="text-3xl font-bold text-black/75">Terimakasih Udah Turut Prihatin Sama Orang-Orang Pusing</h1>
			<p className='text-black/50'>Doakan kami yang baik baik ya!! <br /> <span className='text-[8px]'>(boleh request ga?)</span> </p>
		</div>
		<div className="flex flex-col gap-y-3 items-center justify-between py-6">
			<img src={logo} width="44" />
			<div className="flex items-center gap-x-3">
				<a href="https://www.instagram.com/erphieltwoarea">
					<img src={instagram} width={24} className='opacity-50' alt="instagram" />
				</a>
				<a href="https://www.tiktok.com/@erphieltwoarea">
					<img src={tiktok} width={19} className='opacity-50' alt="tiktok" />
				</a>
			</div>
			<p className='text-black/50 text-xs'>Copyrght erphieltwoarea</p>
		</div>
	</div>
  )
}

export default Footer