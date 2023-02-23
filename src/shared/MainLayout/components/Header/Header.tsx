import React, { FC } from 'react'
import s from './Header.module.sass'
import Logo from '../Logo/Logo'
import PhoneNumber from '../PhoneNumber/PhoneNumber'
import Email from '../Email/Email'
import ChooseFontSize from '../ChooseFontSize/ChooseFontSize'
import ChooseLanguage from '../ChooseLanguage/ChooseLanguage'

const Header = () => {
	return (
		<header className={s.root}>
			<div className={s.headerTop}>
				<address className={s.contactsBox}>
					<div className={s.phoneBox}>
						<PhoneNumber title='Call center' />
					</div>
					<div className={s.emailBox}>
						<Email title='For visa and consular issues' />
					</div>
					<div className={s.addressBox}>
						<p className={s.addressText}>
							16th Floor, Astana Tower Business Center, 12, Samal microdistrict,
							Saryarkynskiy District, Nur-Sultan, Republic of Kazakhstan
						</p>
					</div>
				</address>
				<div className={s.languageAndFontSizeBox}>
					<div className={s.fontSizeBox}>
						<ChooseFontSize />
					</div>
					<div className={s.languageBox}>
						<ChooseLanguage />
					</div>
				</div>
			</div>
			<div className={s.headerBottom}>
				<div className={s.logoNameBox}>
					<div className={s.logoBox}>
						<Logo width={85} height={85} />
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
				<div className={s.searchBox}>
					<div>Component: Search panel</div>
				</div>
			</div>
		</header>
	)
}

export default Header
