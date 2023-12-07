import Link from 'next/link';
import Image from "next/image";
import React from 'react'

const Navbar = () => {
  return (
		<nav className="bg-[#00A] flex justify-between items-center px-4 py-4 rounded-md">
			<div className="flex justify-between w-[130px] ">
				<Link href={"/"}>
					<Image
						src="/logo.png"
						width={25}
						height={25}
						alt="Picture of the author"
						className="border border-white rounded-r-sm "
					/>
				</Link>

				<Link href={"/"} className="font-bold text-white ">
					Tech Space
				</Link>
			</div>
			<Link
				href={"/addPost"}
				className="bg-white p-2 font-semibold text-[14px] rounded-md"
			>
				Add Post
			</Link>
		</nav>
	);
}

export default Navbar