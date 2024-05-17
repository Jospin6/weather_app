
export const ErrorMessage = ({error}: {error: string}) => {
    return <div className="h-[92vh] flex items-center justify-center">
        <div className="rounded-lg bg-red-700 text-red-300 flex items-center justify-cente ">
            {error}
        </div>
    </div>
}