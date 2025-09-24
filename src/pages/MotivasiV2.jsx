import React from "react";
import useData from "../assets/data/data";
import BlurText from "../components/BlurText";
import ShinyText from "../components/ShinyText/ShinyText";

const { motivation } = useData()

export default function MotivasiV2() {
	return (
		<section className="py-18" id="suara-kita">
			<div className="max-w-6xl mx-auto px-6">
				{/* Header */}
				<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
					<div>
						<h2 data-aos="fade-right" data-aos-duration="1000" className="text-3xl md:text-4xl font-bold text-gray-900">
							Suara Orang-Orang Pusing
						</h2>
						<div data-aos="fade-up" data-aos-duration="1000" data-aos-delay={100}>
							<BlurText className="text-gray-500 mt-2 max-w-2xl" direction="right" stepDuration={0.55} delay={50}>
								Kumpulan motivasi random tapi tulus, lahir dari 36 kepala yang (katanya) lagi pusing. Entah itu keluhan, harapan, atau sekadar kata-kata sok bijak, semuanya jadi bagian dari cerita kita di kelas RPL.
							</BlurText>
						</div>
					</div>
				</div>

				{/* Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{motivation.map((m, idx) => (
						<div key={idx} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={idx * 100} className="bg-white ps-0.5 pe-1.5 rounded shadow flex items-center text-start hover:shadow-lg transition">
							<img src={m.image} alt={m.nama} className="w-26 h-26  rounded" />
							<div className="text ms-3 flex flex-col justify-center w-full h-full font-montserrat">
								<h3 className="text-lg font-bold text-black/75">{m.nama}</h3>
								<p className="text-sm text-black/50 flex-1 font-medium flex items-center">{m.motivasi}</p>
								<p className="text-sm text-black/25 self-end font-medium"> {m.tag}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
