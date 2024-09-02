import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Categories from '../etc/Categories';
import Search from '../Search/Search';
import { Login } from '../../../redux/Auth/auth.actions';
import { fetchUser } from '../../../api/index';

function Navbar() {
	const [showNav, setNav] = useState(false);
	const [showCategories, setShowCategories] = useState(false); // New state for Categories
	const dispatch = useDispatch();

	const onClickHandler = () => {
		console.log(showNav);
		setNav(prev => !prev);
	};

	const loginHandler = async () => {
		console.log("Called");
		const pg = await fetchUser();
		console.log('K>O');
		console.log(pg);
		// dispatch(Login());
	};

	const toggleCategories = () => {
		console.log(showCategories);
		setShowCategories(prev => !prev); // Toggle Categories visibility
	};

	return (
		<div>
			<div className="overflow-hidden pt-8 pl-6 pr-12 font-sans">
				<div className="flex float-left">
					<div className="text-navBlue text-2xl font-bold md:ml-5 md:mr-4 mx-3 my-1">
						Course Directory
					</div>
					<div className="lg:flex hidden">
						<Categories show={showCategories} toggle={toggleCategories} /> {/* Pass state and handler */}
						<Search />
					</div>
				</div>

				<div className="hidden lg:flex lg:place-content-center lg:float-right font-sans text-sm py-2.5 mr-2 my-1">
					<button className="my-auto mx-2 text-navy">Admin Panel</button>
					<button className="my-auto mx-2 text-navy" onClick={loginHandler}>
						Login
					</button>
				</div>
				<div className="lg:hidden absolute right-10 top-9 sm:visible">
					<svg
						onClick={onClickHandler}
						xmlns="http://www.w3.org/2000/svg"
						width="22"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="bars"
						className="svg-inline--fa fa-bars fa-w-14"
						role="img"
						viewBox="0 0 448 512"
					>
						<path
							fill="currentColor"
							d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
						/>
					</svg>
				</div>
			</div>
			{showNav && (
				<div className="mx-4 text-right flex flex-col items-right">
					<button onClick={toggleCategories}> {/* Button to toggle Categories */}
						Categories
					</button>
					{showCategories && <Categories />} {/* Conditionally render Categories */}
					<div className="flex justify-end">
						<Search />
					</div>
					<div className="my-1 border-b border-gray-300">
						<button className="my-auto mx-3">Admin Panel</button>
						<button className="my-auto mx-3" onClick={loginHandler}>
							Login
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Navbar;
