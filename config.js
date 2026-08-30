/* ============================================================
   Referee Desk — configuration
   ------------------------------------------------------------
   Diese Datei liegt auf GitHub NEBEN der index.html und wird
   von der App beim Start geladen. Trage hier einmalig deine
   Supabase-Projektdaten ein, dann committen.

   Der Anon/Public-Key ist für den Client gedacht und öffentlich
   unkritisch (der Schutz läuft über die RLS-Policies in Supabase).
   NICHT den geheimen "service_role"-Key verwenden.

   Wenn URL oder Key leer bleiben, läuft die App im lokalen Modus
   (nur der eigene Browser, ohne Anmeldung) — praktisch zum Testen.
   ============================================================ */
window.RD_CONFIG = {
  SUPABASE_URL:      "https://deulqlrjytprpmdjttky.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRldWxxbHJqeXRwcnBtZGp0dGt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgwMDg5NDAsImV4cCI6MjEwMzU4NDk0MH0.xSPXAX0gxnuAdHk6dkVh_HGCI1NgLHyKAiTYJqvS4HQ",
  ADMIN_EMAIL:       "michael.gaede@dsqv.de"
};
