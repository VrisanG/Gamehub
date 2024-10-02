const AuthLayout=({children}:{
    children: React.ReactNode
})=>{
    return (
        <div>
            <nav className="bg-blue-500 w-full">
                Auth nav
            </nav>
            {children}
        </div>
    )
}
export default AuthLayout