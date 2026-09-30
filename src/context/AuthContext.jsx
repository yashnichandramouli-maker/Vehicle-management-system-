import{createContext,useContext,useMemo,useState}from"react";
const AuthContext=createContext(null);
const read=k=>{try{return JSON.parse(localStorage.getItem(k)||"null")}catch{return null}};
export function AuthProvider({children}){const[token,setToken]=useState(()=>localStorage.getItem("token"));const[customer,setCustomer]=useState(()=>read("customer"));
const login=r=>{if(!r?.token)throw new Error("Login response did not contain a token.");localStorage.setItem("token",r.token);localStorage.setItem("customer",JSON.stringify(r.user??r.customer??null));setToken(r.token);setCustomer(r.user??r.customer??null)};
const logout=()=>{localStorage.removeItem("token");localStorage.removeItem("customer");setToken(null);setCustomer(null)};
return <AuthContext.Provider value={useMemo(()=>({user:customer,token,login,logout}),[customer,token])}>{children}</AuthContext.Provider>}
export const useAuth=()=>{const c=useContext(AuthContext);if(!c)throw new Error("useAuth must be used inside AuthProvider");return c};