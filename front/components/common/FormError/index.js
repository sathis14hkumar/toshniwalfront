export default function FormError({
    errortext
}) {
    return (
        <div className="invalid-feedback d-block text-start">
            {errortext}
        </div>
    )
}