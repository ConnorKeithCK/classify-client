import { MoreHoriz } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { FC } from 'react';

interface IMoreButtonProps {
	onClick: any;
}

export const MoreButton: FC<IMoreButtonProps> = ({ onClick }) => {
	return (
		<IconButton onClick={onClick}>
			<MoreHoriz />
		</IconButton>
	);
};
