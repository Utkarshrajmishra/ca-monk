import { useCallback, useEffect, useRef, useState } from "react"

const useTimer=()=>{
    const [timer, setTimer]=useState(15);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const isCompleted=timer<=0;
    const isRunning=timerRef.current!==null;

    const startTimer=useCallback(()=>{
        timerRef.current=setInterval(()=>{
            setTimer((prev)=>{
                if(prev<=0){
                    clearInterval(timerRef.current!);
                    timerRef.current=null;
                    return 15;
                }
                return prev-1;
            })
        },1000)
    },[isCompleted, isRunning])

    const resetTimer=useCallback(()=>{
            if(timerRef.current){
                clearInterval(timerRef.current);
                timerRef.current=null;
            }

            setTimer(15);
    },[])

      useEffect(() => {
        if (isCompleted && timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
      }, [isCompleted]);

      useEffect(() => {
        return () => {
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
        };
      }, [isCompleted]);


      return{
        timer, 
        startTimer,
        resetTimer,
        isCompleted
      }

}