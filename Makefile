.PHONY: frontend frontend_clean

frontend:
	make -C frontend
	
frontend_clean:
	make -C frontend clean
