import { Visibility } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { FC } from 'react';

interface IViewButtonProps {
	onClick: any;
}

export const ViewButtonIcon: FC<IViewButtonProps> = ({ onClick }) => {
	return (
		<IconButton onClick={onClick}>
			<Visibility />
		</IconButton>
	);
};
