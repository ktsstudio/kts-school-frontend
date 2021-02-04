import * as React from 'react';

type Props = {
  name?: string; // number, null, undefined
  onClick: (e: React.MouseEvent) => void; 
};

const DetailPage: React.FC<Props> = ({ name, onClick }) => {
    return <div></div>;
};

export default DetailPage;
