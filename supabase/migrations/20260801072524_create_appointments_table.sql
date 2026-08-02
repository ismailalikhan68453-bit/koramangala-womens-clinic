/*
# Create appointments table (single-tenant, no auth)

1. New Tables
- `appointments`
  - `id` (uuid, primary key)
  - `full_name` (text, not null) — patient's full name
  - `phone` (text, not null) — contact phone number
  - `email` (text, nullable) — optional email
  - `preferred_doctor` (text, nullable) — chosen doctor
  - `preferred_date` (date, nullable) — requested appointment date
  - `preferred_time` (text, nullable) — requested time slot
  - `reason` (text, nullable) — reason for visit
  - `message` (text, nullable) — additional notes
  - `status` (text, default 'pending') — booking status
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `appointments`.
- Allow anon + authenticated INSERT (public booking form, no sign-in).
- No SELECT/UPDATE/DELETE from the anon key — bookings are managed by clinic staff via the dashboard.
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone text NOT NULL,
  email text,
  preferred_doctor text,
  preferred_date date,
  preferred_time text,
  reason text,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_appointments" ON appointments;
CREATE POLICY "anon_insert_appointments" ON appointments FOR INSERT
TO anon, authenticated WITH CHECK (true);
