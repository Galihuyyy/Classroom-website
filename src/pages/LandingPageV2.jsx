import { Avatar, AvatarGroup, useMediaQuery, useTheme } from '@mui/material'
import useData from '../assets/data/data'
import { mascot } from '../assets/data/assets'
import BlurText from '../components/BlurText'

const LandingPageV2 = () => {
	const { avatar } = useData()
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<div className='w-full  pt-24'>
			<div className="container max-h-svh mx-auto flex flex-col items-center">
				<div id="avatar" className='h-fit flex items-center gap-x-1.5 w-fit'>
					<AvatarGroup spacing={isMobile ? 12 : 8}>
						{avatar.map((i, idx) => (
							<Avatar key={idx} sx={{ bgcolor: i.color }} data-aos="fade-right" data-aos-duration="1000" data-aos-delay={idx * 100} data-aos-once={false} className='!w-7 !h-7 !text-sm'>
								{i.label}
							</Avatar>
						))}
					</AvatarGroup>
					<h1 className='font-semibold font-montserrat text-[#03AEC6] text-sm' data-aos="fade" data-aos-duration="1000" data-aos-delay={1200}>+8 Participant</h1>
				</div>
				
				
					<BlurText delay={150} animateBy='words' direction='top' className='text-4xl md:text-5xl mt-3 md:mt-6 font-semibold text-[#1F1F1F] font-poppins max-w-3xl !text-center'>
						Error boleh sering, asal bareng erphieltwoarea tetap healing
					</BlurText>
				<img src={mascot} className='w-md mt-18 object-fit-contain' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={200} />

			</div>

		</div>
	)
}

export default LandingPageV2