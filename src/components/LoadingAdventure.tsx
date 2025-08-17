
interface LoadingAdventuresProps {
  loadingAdventures: boolean;
}

const LoadingAdventure = ({ loadingAdventures }: LoadingAdventuresProps) => {
  return (
    <>
      {loadingAdventures && (
        <div className="text-center py-20">
          <p className="font-body text-xl text-muted-foreground">
            Cargando aventuras...
          </p>
        </div>
      )}
    </>
  );
};

export default LoadingAdventure;