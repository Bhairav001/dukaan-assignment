import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { FcBullish } from 'react-icons/fc'
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from "../sidebarLinks/index"


const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
	return (
		<div className="bg-neutral-900 w-60 p-3 flex flex-col" style={{backgroundColor:"#010118"}}>
			<div className="flex items-center gap-2 px-1 py-3">
				{/* <FcBullish fontSize={24} /> */}
                <img src="https://s3-alpha-sig.figma.com/img/18ef/52d9/1494ed3109e53ab9db09579cd5d8839e?Expires=1704067200&Signature=H~uS3DJWoUk3Mt34HePdNdEHwWddO~To5UR50YtDRYkyeIGjQkRZcoUOTftRD5yQRfYJ2r-wPlD7ZUCnU4zvLPPZJ-GoURTTXlCSvi2KUOZMF0S5pTbk~3Ce6tIvt-2wtx1ZHVbNIIuIsPHa0YxO1x7N4MVtoS9Z7-CpCYHxKWzrmT6Cyc7uk9-mKH~YA9qBqXGr1WEGQMog4s7LFR4qs9EK6wTTAKvtd7o4C0bV2o2jhqNWUEISPvCWueE7vQzrjtIOuA1jRWZsvC6GV0y4bbVV4Rv8X-9700pRa9qNmWOXPq8HQvVczcbI3UlRKC6bg9SVdPdQSYZpsxMl7NAYIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" style={{width:"39px",height:"39px"}} alt="" />
				<span className="text-neutral-200 text-lg">Nishyan</span><br />
			</div>
                 <p className='text-white mr-10'>Visit Store</p>
			<div className="py-8 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
			<div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
				<div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
				</div>
			</div>
		</div>
	)
}



function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={link.path}
			className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
		>
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	)
}