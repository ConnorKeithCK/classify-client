import { GetApp } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { FC } from 'react';

interface IDownloadButtonProps {
	onClick: any;
}

export const DownloadButton: FC<IDownloadButtonProps> = ({ onClick }) => {
	return (
		<IconButton onClick={onClick}>
			<GetApp />
		</IconButton>
	);
};
