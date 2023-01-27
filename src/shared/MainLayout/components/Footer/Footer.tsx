import React from 'react'
import s from './Footer.module.sass'
import Logo from '../Logo/Logo'
import PhoneNumber from '../PhoneNumber/PhoneNumber'
import Email from '../Email/Email'
import ClockWork from '../ClockWork/ClockWork'

const Footer = () => {
	return (
		<footer className={s.root}>
			<div className={s.footerTop}>
				<div className={s.left}>
					<div className={s.logoNameBox}>
						<div className={s.logoBox}>
							<Logo width={45} height={45} />
						</div>
						<div className={s.nameBox}>
							<h1 className={s.title}>
								Royal Thai Embassy, Nur-Sultan, Kazakhstan
							</h1>
							<span className={s.subtitle}>
								สถานเอกอัครราชทูต ณ กรุงนูร์-ซุลตัน
							</span>
						</div>
					</div>
					<div className={s.addressBox}>
						<p className={s.addressText}>
							16th Floor, Astana Tower Business Center, 12, Samal microdistrict,
							Saryarkynskiy District, Nur-Sultan, Republic of Kazakhstan,
							zipcode: 010000
						</p>
					</div>
				</div>
				<div className={s.right}>
					<div className={s.clockWorkBox}>
						<ClockWork />
					</div>
					<div className={s.phoneBox}>
						<PhoneNumber title='Call center' />
					</div>
					<div className={s.emailBox}>
						<Email title='For visa and consular issues' />
					</div>
				</div>
			</div>
			<div className='footerBottom'></div>
		</footer>
	)
}

export default Footer
