export default function (seconds) {
    const hours = Math.floor(seconds / 60 / 60);
    const minutes = Math.floor((seconds - hours * 60 * 60) / 60);
    const sec = Math.floor(seconds - hours * 60 * 60 - minutes * 60);

    function addZeroes(value) {
        if (value == 0) {
            return "00";
        }
        return (value.toString().length == 1) ? `0${value}` : value;
    }

    return `${addZeroes(hours)}:${addZeroes(minutes)}:${addZeroes(sec)}`;
}