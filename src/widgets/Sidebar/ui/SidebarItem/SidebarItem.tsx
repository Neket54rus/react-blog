import { MutableRefObject, memo, useEffect, useRef } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
	className?: string
	to: string
	Icon?: React.VFC<React.SVGProps<SVGSVGElement>>
	text: string
	collapsed?: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
	const {
		className,
		to,
		Icon,
		text,
		collapsed = false,
	} = props;

	const textRef = useRef(null) as MutableRefObject<HTMLSpanElement>;
	const iconRef = useRef(null) as MutableRefObject<HTMLDivElement>;
	const linkRef = useRef(null) as MutableRefObject<HTMLDivElement>;
	const firstRenderRef = useRef<boolean>(true);

	useEffect(() => {
		if (collapsed) {
			textRef.current.classList.add('hide');

			setTimeout(() => {
				textRef.current.classList.add(cls.collapsed);
			}, 200);
		} else {
			textRef.current.classList.remove(cls.collapsed);

			setTimeout(() => {
				textRef.current.classList.remove('hide');
			}, 200);
		}

		if (!firstRenderRef.current) {
			iconRef.current.classList.add('hide');

			setTimeout(() => {
				iconRef.current.classList.remove('hide');
			}, 200);
		}
	}, [collapsed]);

	useEffect(() => {
		firstRenderRef.current = false;
	}, []);

	return (
		<AppLink
			className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed }, [className])}
			to={to}
			theme={collapsed && AppLinkTheme.CENTER}
		>
			<div className={cls.content} ref={linkRef}>
				{Icon && (
					<div className={cls.iconWrapper} ref={iconRef}>
						<Icon
							className={cls.icon}
						/>
					</div>
				)}
				<span
					className={cls.text}
					ref={textRef}
				>
					{text}
				</span>

			</div>
		</AppLink>
	);
});
