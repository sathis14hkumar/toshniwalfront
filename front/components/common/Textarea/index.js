import classes from './textarea.module.scss';

export default function Textarea({
    id = "",
    name = "",
    rows = "",
    cols = "",
    placeholder = ""
}) {
    return (
        <textarea className={classes.textarea} placeholder={placeholder} id={id} name={name} rows={rows} cols={cols} />
    )
}