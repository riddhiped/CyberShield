import psycopg2

try:
    conn = psycopg2.connect(
        host="localhost",
        database="cyber_dashboard",
        user="postgres",
        password="riddhi29",
        port="5432"
    )

    print("Connected Successfully!")

    conn.close()

except Exception as e:
    print("Error:", e)