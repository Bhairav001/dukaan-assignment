import React from 'react'
import Table from '../components/Table'
import Box from '../components/Box'


export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-row gap-4 w-full">
				<Box/>
			</div>
			<div className="flex flex-row gap-4 w-full">
				<Table />
			</div>
		</div>
	)
}