const numberFormat = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

export default numberFormat;
