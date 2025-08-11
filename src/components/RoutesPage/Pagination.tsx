import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  showPageInfo?: boolean;
  totalItems?: number;
  itemsPerPage?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
  showPageInfo = false,
  totalItems = 0,
  itemsPerPage = 0
}) => {
  const [goToPage, setGoToPage] = useState("");

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const handleGoToPage = () => {
    const page = parseInt(goToPage);
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
      setGoToPage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleGoToPage();
    }
  };

  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 font-body text-secondary ${className}`}>
      {/* Page Info */}
      {showPageInfo && totalItems > 0 && (
        <div className="text-sm text-muted-foreground bg-muted/20 px-3 py-1 rounded-full">
          Mostrando {startItem}-{endItem} de {totalItems} rutas
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-1">
        {/* Previous Button */}
        <Button
          variant="ghost"
          className="w-9 h-9 p-0 text-secondary hover:bg-primary hover:text-primary-foreground rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Página anterior"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {/* Page Numbers */}
        {getVisiblePages().map((page, index) => (
          <div key={index}>
            {page === "..." ? (
              <span className="px-2 text-muted-foreground">...</span>
            ) : (
              <Button
                variant="ghost"
                className={`w-9 h-9 p-0 rounded-full transition-all duration-200 ${page === currentPage
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-secondary hover:bg-primary hover:text-primary-foreground hover:scale-105"
                  }`}
                onClick={() => onPageChange(page as number)}
                aria-label={`Ir a página ${page}`}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </Button>
            )}
          </div>
        ))}

        {/* Next Button */}
        <Button
          variant="ghost"
          className="w-9 h-9 p-0 text-secondary hover:bg-primary hover:text-primary-foreground rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Página siguiente"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Go to Page Input */}
      {totalPages > 5 && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Ir a:</span>
          <div className="flex items-center gap-1">
            <Input
              type="number"
              min={1}
              max={totalPages}
              value={goToPage}
              onChange={(e) => setGoToPage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-16 h-8 text-center text-sm rounded-full"
              placeholder={currentPage.toString()}
            />
            <Button
              variant="outline"
              size="sm"
              onClick={handleGoToPage}
              className="h-8 px-3 text-xs rounded-full"
              disabled={!goToPage || parseInt(goToPage) < 1 || parseInt(goToPage) > totalPages}
            >
              Ir
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pagination;
